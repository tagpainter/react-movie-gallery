import axios from "axios";
import qs from "qs";

import { random, sleep } from "@/lib/utils";
import { createResource } from "@/lib/resources";

export const TmdbResourceFactory = initial => {
  const tmdbApi = axios.create({
    baseURL: "https://api.themoviedb.org/3/"
  });

  return createResource(
    path => {
      let uri = path.split("?")[0];
      let search = path.split("?")[1] || "";
      let query = qs.parse(search);
      query["api_key"] = process.env.TMDB_APIKEY;

      return tmdbApi.get(`${uri}?${qs.stringify(query)}`).then(res => {
        let data = res.data;
        if (uri == "/trending/movie/week") {
          data.todayId = data.results[random(data.results.length - 1)].id;
        }
        return data;
      });
    },
    null,
    initial
  );
};
