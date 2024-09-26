import * as httpRequest from '~/utils/httpRequest';

//Chuyển đổi từ Promise sàn async await
export const search = async (q, type = 'less') => {
    try {
        // encodeURIComponent: hàm mã hóa ký tự đặc biệt khi nhập ô search
        const res = await httpRequest.get(`users/search`, {
            params: {
                q,
                type
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
}