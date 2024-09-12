import request from './route'

// 获取博客列表
export const getBlogList = () => {
  return request({
    url: `/blogList`,
    method: "GET",
  });
};