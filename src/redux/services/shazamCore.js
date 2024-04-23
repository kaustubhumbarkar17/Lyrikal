import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'




  export const shazamCoreApi=createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery:fetchBaseQuery({
        baseUrl:'https://shazam-api6.p.rapidapi.com/shazam',
        prepareHeaders:(headers)=>{
            headers.set('X-RapidAPI-Key','df2963f903mshdbe5dd914a87e56p1b25d3jsnebfb8d391054');

            return headers;
        },
    }),
    endpoints:(builder)=>({
        getTopSongs:builder.query({query:()=>'/top_tracks_country'}),
         getSongDetails: builder.query({ query: ({ songid }) => `/about_track?track_id=${songid}` }),
         getSongRelated: builder.query({ query: ({ songid }) => `/about_track?track_id=${songid}` }),
          getArtistDetails: builder.query({ query: (artistId) => `/about_artist?artist_id=${artistId}` }),
    }),
  });
  export const {useGetTopSongsQuery,useGetSongDetailsQuery,useGetSongRelatedQuery,useGetArtistDetailsQuery}=shazamCoreApi;