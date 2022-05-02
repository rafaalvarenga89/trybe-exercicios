export const CHANGE_MOVIE = 'CHANGE_MOVIE';

// export const actionSelectedMovie = {
//     type: CHANGE_MOVIE,
//     movie: {
//         id: 1,
//         title: 'Toy Story',
//         released: 1995,
//         link: 'https://www.youtube.com/embed/rNk1Wi8SvNc',
//     },
//     category: {
//         id: 1,
//         name: 'Animação',  
//     }
// }

export const actionSelectedMovie = (movie, category) => ({
    type: CHANGE_MOVIE,
    movie,
    category,
});
