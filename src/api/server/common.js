import request from '@/utils/request/serverRequest'

// 获取博客列表
export const getBlogList = () => {
  return request({
    url: `/blogList`,
    method: "GET",
  });
};