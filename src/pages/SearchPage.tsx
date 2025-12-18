import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router";
import { Search } from "lucide-react";
import { recipes } from "../data/recipes";
import Header from "../components/Header";
import "../assets/scss/SearchPage.scss";

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get("q") || "";

  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState<typeof recipes>([]);
  const recommended = recipes.slice(0, 4);
  const mostSearched = ["Choklad", "Kanelbullar", "Blåbär", "Vanilj"];

  useEffect(() => {
    const trimmedQuery = query.trim();

    if (!trimmedQuery) {
      setResults([]);
      return;
    }

    const searchWords = trimmedQuery.toLowerCase().split(/\s+/); // dela på alla mellanslag

    const filtered = recipes.filter((r) => {
      const title = r.title.toLowerCase();
      const category = r.category.toLowerCase();

      // Om något ord finns i titel eller kategori → match
      return searchWords.some(
        (word) => title.includes(word) || category.includes(word)
      );
    });

    setResults(filtered);
  }, [query]);

  function handleSearch(value: string) {
    setQuery(value);
    setSearchParams({ q: value });
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Header />

      <div className="search-page">
        {/* 🔍 SEARCH */}
        <div className="search-wrapper large">
          <Search size={20} />
          <input
            value={query}
            placeholder="Sök recept, ingrediens eller kategori..."
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>

        {/* 🌸 TOMT LÄGE */}
        {!query && (
          <>
            <div className="search-hero">
              <h2>Vad är du sugen på att baka idag? 🍰</h2>
              <p>Utforska våra favoriter eller börja skriva i sökfältet</p>
            </div>

            {/* 💗 REKOMMENDERAT */}
            <section className="search-section">
              <h3>Vi rekommenderar</h3>
              <div className="recipe-grid">
                {recommended.map((r) => (
                  <Link
                    to={`/recept/${r.id}`}
                    key={r.id}
                    className="recipe-card"
                  >
                    <img src={r.image} alt={r.title} />
                    <h4>{r.title}</h4>
                    <p>{r.category}</p>
                  </Link>
                ))}
              </div>
            </section>

            {/* 🔥 MEST SÖKTA */}
            <section className="search-section">
              <h3>Mest sökta</h3>
              <div className="search-tags">
                {mostSearched.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => handleSearch(tag)}
                    className="search-tag"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </section>
          </>
        )}

        {/* 🔎 RESULTAT */}
        {query && (
          <>
            <p className="result-count">
              {results.length} resultat för "{query}"
            </p>

            <div className="recipe-grid">
              {results.map((r) => (
                <Link to={`/recept/${r.id}`} key={r.id} className="recipe-card">
                  <img src={r.image} alt={r.title} />
                  <h4>{r.title}</h4>
                  <p>{r.category}</p>
                </Link>
              ))}
            </div>

            {results.length === 0 && (
              <p className="empty">Inga recept hittades 😢</p>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default SearchPage;
