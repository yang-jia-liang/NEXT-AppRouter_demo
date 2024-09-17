'use server'

import * as API from '@/api/server/common'
//
// export default async function server() {
//     return {
//         login: async (data) => {
//             try {
//                 const res = await API.login(data);
//                 console.log(res);
//                 return res;
//             } catch (error) {
//                 console.error('Error:', error);
//                 throw error;
//             }
//         }
//     }
// }

export async function login(data){



    try {
        const res = await API.login(data);
        console.log(res);
        return res;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}
