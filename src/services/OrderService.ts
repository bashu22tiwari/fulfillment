import api from '@/api';

const fetchOpenOrders = async (query: any): Promise <any>  => {
  return api({
   // TODO: We can replace this with any API
    url: "solr-query", 
    method: "post",
    data: query
  });
}

export const OrderService = {
  fetchOpenOrders
}