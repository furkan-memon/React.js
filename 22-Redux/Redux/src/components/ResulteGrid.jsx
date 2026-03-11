import React, { useEffect } from "react";
import { fetchPhotos, fetchVideos } from "../api/mediaApi";
import {
  setQuery,
  setLoading,
  setError,
  setResultes,
} from "../redux/features/searchSLice";
import { useDispatch, useSelector } from "react-redux";
import ResulteCard from "./ResulteCard";
const ResulteGrid = () => {
  const { query, activeTab, results, loading, error } = useSelector(
    (store) => store.search,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    const getData = async () => {
        if(!query) return <h1>Type Somthing..</h1>
      try {
        dispatch(setLoading());
        let data = []
        if (activeTab == "photos") {
          let res = await fetchPhotos(query);
        //   console.log(res.results[0].alt_description);
          
          data = res.results.map((item) => ({
            id: item.id,
            type: "photo",
            title: item.alt_description,
            thumbnail: item.urls.small,
            src: item.urls.full,
          }));
          dispatch(setResultes(data));

        } 
        if(activeTab == "videos") {
          let res = await fetchVideos(query);
          data = res.videos.map((item) => ({
            id: item.id,
            type: "video",
            title: item.user.name || "video",
            thumbnail: item.image,
            src: item.video_files[0].link,
          }));
          dispatch(setResultes(data));
        }
      } catch (err) {
        dispatch(setError(err.massage));
      }
    };
    getData();
  }, [query, activeTab]);
  if (error) return <h1>Error</h1>;
  if (loading) return <h1>loading..</h1>;

  return (
    <div className="flex h-[80%] justify-center w-full flex-wrap gap-3 overflow-auto px-10 ">
      {results.map((item, idx) => {
        return <div key={idx}>
            <ResulteCard item={item}/>
        </div>
      })}
    </div>
  );
};

export default ResulteGrid;
