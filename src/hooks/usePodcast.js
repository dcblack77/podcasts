import { useQuery } from "@tanstack/react-query";


export const useGetPodcast = (podcastId) => {
  return useQuery({
    queryKey: ["podcast", podcastId],
    queryFn: async () => {
      const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(`https://itunes.apple.com/lookup?id=${podcastId}&media=podcast
      &entity=podcastEpisode&limit=20`)}`);
      return JSON.parse((await response.json()).contents).results[0];
    }
  });
}

export const useGetPodcasts = (filter) => {
  return useQuery({
    queryKey: ["podcasts", filter],
    queryFn: async () => {
      const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json')}`);
      const data =  JSON.parse((await response.json()).contents).feed.entry;
      if (filter === '' || filter === null) {
        return data;
      }
      return data.filter(fil => 
            fil['im:name'].label.toLowerCase().includes(filter.toLowerCase()) 
            || fil['im:artist'].label.toLowerCase().includes(filter.toLowerCase())
        );
    }
  });
}
