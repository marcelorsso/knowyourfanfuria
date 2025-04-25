import { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState(null);

  const handleAnalyze = async () => {
    if (!username) return;

    setLoading(true);
    setErro(null);
    setResult(null);

    try {
      const response = await fetch(`http://localhost:3001/analyze/${username}`);
      const data = await response.json();
      if (data.error) throw new Error(data.error);
      setResult(data);
    } catch (err) {
      setErro("Erro ao buscar dados. Verifique o nome de usuário ou tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <h1>Know Your Fan - FURIA 🐺</h1>

      <input
        type="text"
        placeholder="Digite o @ do Twitter"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button onClick={handleAnalyze} disabled={loading}>
        {loading ? "Analisando..." : "Analisar Fã"}
      </button>

      {erro && <p className="erro">{erro}</p>}

      {result && (
        <div className="resultado">
          <h2>@{result.username}</h2>
          <p><strong>Fan Score:</strong> {result.score}</p>
          <ul>
            <li>Bio menciona FURIA? {result.details.mentionsInBio ? "✅ Sim" : "❌ Não"}</li>
            <li>Tweets mencionando FURIA: {result.details.tweetMentions}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
