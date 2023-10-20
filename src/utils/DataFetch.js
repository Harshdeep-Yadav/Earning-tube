import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const fetchVideoDetails = async (videoId) => {
  const videoOptions = {
    params: {
      part: "contentDetails,snippet,statistics",
      id: videoId,
    },
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_RAPID_KEY,
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };

  try {
    // Fetch video details
    const videoResponse = await axios.get(`${BASE_URL}/videos`, videoOptions);
    const videoDetails = videoResponse.data.items[0];

    // Extract channel ID from video details
    const channelId = videoDetails.snippet.channelId;

    // Fetch channel details, including subscriber count
    const channelOptions = {
      params: {
        part: "snippet,statistics",
        id: channelId,
      },
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_RAPID_KEY,
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
      },
    };

    const channelResponse = await axios.get(
      `${BASE_URL}/channels`,
      channelOptions
    );
    const channelDetails = channelResponse.data.items[0];

    // Add the channel subscriber count to the video details
    videoDetails.channelSubscriberCount =
      channelDetails.statistics.subscriberCount;

    // console.log(videoDetails.channelSubscriberCount =
    //     channelDetails.statistics.subscriberCount)

    return videoDetails;
  } catch (error) {
    console.error("Error fetching video details:", error);
    throw error;
  }
};

const extractVideoIdFromLink = (videoLink) => {
  // Use regular expressions to extract the video ID from the link
  const regex = /[?&]v=([^&]+)/;
  const match = videoLink.match(regex);
  if (match) {
    return match[1];
  } else {
    throw new Error("Invalid YouTube video link");
  }
};

export { fetchVideoDetails, extractVideoIdFromLink };
