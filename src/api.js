import axios from "axios";

const api = axios.create({
  baseURL:
    "http://itda-api-2.eba-iahuraib.ap-northeast-2.elasticbeanstalk.com/",
});

export const laptopApi = {
  apiLaptops: (page) => api.get(`api/v1/laptops/${page}`),
  filterapiLaptops: (
    brand,
    min_price,
    max_price,
    processor,
    memory,
    storage,
    weight,
    inch,
    purpose,
    pagestr
  ) => {
    return api.get(
      `api/v1/laptops/filtered?br=${brand}&lp=${min_price}&mp=${max_price}&pr=${processor}&me=${memory}&st=${storage}&we=${weight}&in=${inch}&pu=${purpose}&${pagestr}`
    );
  },
  brandLaptops: (brand, pagestr) =>
    api.get(`api/v1/laptops/${brand}/${pagestr}`),
  // (page, brand)  이 놈들처럼 함수에서 입력으로 들어오는 것을 parameter라고 함.
  //
  showDetail: (id) => api.get(`api/v1/laptops/${id}`),
};

export const tabletApi = {
  apiTablets: (page) => api.get(`api/v1/tablets/${page}`),
  filterapiTablets: (
    brand,
    min_price,
    max_price,
    os,
    memory,
    storage,
    weight,
    inch,
    pagestr
  ) => {
    console.log("sex", os);
    return api.get(
      `api/v1/tablets/filtered?br=${brand}&lp=${min_price}&mp=${max_price}&os=${os}&me=${memory}&st=${storage}&we=${weight}&in=${inch}&${pagestr}`
    );
  },
  brandTablets: (brand, pagestr) =>
    api.get(`api/v1/tablets/${brand}/${pagestr}`),

  showDetail: (id) => api.get(`api/v1/tablets/${id}`),
};

export const searchApi = {
  search: (term, page) => {
    // console.log(term);
    return api.get(`api/v1/search?search=${term}&page=${page}`);
  },
};

export const phoneApi = {
  apiPhones: (page) => api.get(`api/v1/phones/${page}`),
  filterapiPhones: (brand, min_price, max_price, processor, pagestr) => {
    return api.get(
      `api/v1/phones/filtered?brand=${brand}&min_price=${min_price}&max_price=${max_price}&processor=${processor}&${pagestr}`
    );
  },
  brandPhones: (brand, pagestr) => api.get(`api/v1/phones/${brand}/${pagestr}`),
  showDetail: (id) => api.get(`api/v1/phones/${id}`),
};

export const watchApi = {
  apiWatches: (page) => api.get(`api/v1/watches/${page}`),
  showDetail: (id) => api.get(`api/v1/watches/${id}`),
};

export const earphoneApi = {
  apiEarphones: (page) => api.get(`api/v1/earphones/${page}`),
  showDetail: (id) => api.get(`api/v1/earphones/${id}`),
};

// encodeURIComponent
