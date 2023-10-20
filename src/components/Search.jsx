import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { extractVideoIdFromLink, fetchVideoDetails } from "../utils/DataFetch";

const Search = () => {
  const navigate = useNavigate();
  const [videoLink, setVideoLink] = useState("");
  const [videoDetails, setVideoDetails] = useState(null);
  const [channelSubscriberCount, setChannelSubscriberCount] = useState(null);

  const handleSearch = async () => {
    try {
      // Extract the video ID from the video link
      const videoId = extractVideoIdFromLink(videoLink);

      // console.log(videoId);

      const details = await fetchVideoDetails(videoId);

      // console.log(details.snippet.publishedAt);
      // console.log(details.channelSubscriberCount);

      setVideoDetails(details);
      setChannelSubscriberCount(details.channelSubscriberCount);
      navigate("/earning", { state: { videoDetails: details } });
    } catch (error) {
      return error.message;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-20 ">
      <span className="text-[55px] text-white font-semibold ">
        Discover your earning <br />
        <span className="flex items-center justify-center">potential</span>
      </span>
      <span className="text-[24px] text-[#FFFFFFCC] font-semibold-sm ">
        Turn your Youtube expertise into a lucrative income <br />
        <span className="flex items-center justify-center">
          through resource sharing
        </span>
      </span>

      <div className="flex p-3.5 lg:p-12 items-center gap-10 flex-1">
        <input
          className="w-[500px] h-14  px-10 border-2 border-white border-opacity-50 rounded-[50px] text-white flex items-center justify-center bg-black"
          type="text"
          placeholder={`enter youtube video link`}
          onChange={(e) => setVideoLink(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="  rounded-[50px] bg-red-500 text-white px-4 py-2 w-36 h-14  "
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
