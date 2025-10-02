// Experiment 2
import { getArticles } from "./services/getarticles";
import CardArticle from "./components/card_articles";

export default async function ArticlesPage() {
  const articles = await getArticles();

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Daftar Artikel</h1>
      <ul className="space-y-2">
        {articles.map((article) => (
          <li key={article.id} className="border p-3 rounded">
            <CardArticle
              urlimage={article.urlimage}
              title={article.title}
              description={article.description}
              author={article.author}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}



// Experiment 1

// import { getArticles } from "./services/getarticles";

// export default async function ArticlesPage() {
//   const articles = await getArticles()

//   return (
//     <div className="p-4">
//       <h1 className="text-xl font-bold mb-4">Daftar Artikel</h1>
//       <ul className="space-y-2">
//         {articles.map((article) => (
//           <li key={article.id} className="border p-3 rounded">
            
// <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
//     <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={article.urlimage} alt=""/>
//     <div className="flex flex-col justify-between p-4 leading-normal">
//         <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{article.title}</h5>
//         <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{article.description}</p>
//     </div>
// </a>

//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }