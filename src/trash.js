/*
labtopDetail: id =>
api.get(`labtop/${id}`, {
  params: {
    append_to_response: "images"
  }
}),
search: term =>
api.get("search/labtop", {
  params: {
    query: encodeURIComponent(term)
  }
})
};

export const tabletApi = {
brand: () => api.get(""),
tabletDetail: id =>
api.get(`tablet/${id}`, {
  params: {
    append_to_response: "images"
  }
}),
search: term =>
api.get("search/tablet", {
  params: {
    query: encodeURIComponent(term)
  }
})
};

export const phoneApi = {
brand: () => api.get(""),
phoneDetail: id =>
api.get(`phone/${id}`, {
  params: {
    append_to_response: "videos"
  }
}),
search: term =>
api.get("search/phone", {
  params: {
    query: encodeURIComponent(term)
  }
})
};
