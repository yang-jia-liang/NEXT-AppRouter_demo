import request from '@/utils/request/serverRequest'

/**
 * @desc 登录
 *
 * @param data.id       -
 * @param data.password -
 * */
export const login = (data) => {
  return request({
    url: `/login`,
    method: "POST",
    data,
  });
};

// 获取博客列表
export const getBlogList = () => {
  return request({
    url: `/blogList`,
    method: "GET",
  });
};