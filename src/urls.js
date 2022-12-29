import { apikey } from "./constants/constants"
export const trending=`trending/all/day?api_key=${apikey}`
export const toprated=`movie/top_rated?api_key=${apikey}`
export const upcoming=`movie/upcoming?api_key=${apikey}`
export const Netflixoriginals=`discover/movie?api_key=${apikey}&with_networks=213`
export const old=`discover/movie?primary_release_year=2000&api_key=${apikey}`

// export const trendings="https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>"
