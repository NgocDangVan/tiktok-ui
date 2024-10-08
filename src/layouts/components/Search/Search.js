import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { useEffect, useState, useRef } from 'react';
import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useDebounce} from '~/hooks';

import * as searchService from '~/services/searchService';

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult,setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);

    // Debounce là thuật ngữ để chỉ lấy hành động cuối cùng của chuỗi hành động, ở đây xử lý lỗi kết quả của search lộn xộn khi call API
    const debouncedValue = useDebounce(searchValue,500);

    const inputRef = useRef();

    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchResult([]);
            return;
        }

        setLoading(true);

        const fetchApi = async () => {
            setLoading(true);
            const result = await searchService.search(debouncedValue);
            setSearchResult(result);
            setLoading(false);
        }

        fetchApi();
    },[debouncedValue]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    }

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if(!searchValue.startsWith(' ')) {
            setSearchValue(searchValue); 
        }
        
    }

    return ( 
        <div>
            <HeadlessTippy 
                interactive
                appendTo={() => document.body}
                visible = {showResult && searchResult.length > 0}
                onClickOutside={handleHideResult}
                render={attrs => (
                        <div className={styles.searchResult} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={styles.searchTitle}>
                                    Account
                                </h4>
                                {searchResult.map(result => (
                                    <AccountItem key={result.id} data={result}></AccountItem>
                                ))}
                            </PopperWrapper>
                        </div>
                )}
            >
                <div className={styles.search}>
                    <input 
                        ref={inputRef}
                        value={searchValue}
                        placeholder='Search accounts and videos' 
                        spellCheck={false} 
                        onFocus={() => setShowResult(true)}
                        onChange={ handleChange }
                    ></input>
                    {!!searchValue && !loading && (
                        <button className={styles.clear} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                        </button>
                    )}
                    
                    {loading && <FontAwesomeIcon icon={faSpinner} className={styles.loading}></FontAwesomeIcon>}
                    
                    <button className={styles.searchButton} onMouseDown={(e) => e.preventDefault()}>
                        <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;