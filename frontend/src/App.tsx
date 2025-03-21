import { useEffect, useState } from "react";

type Cost = {
  id: number;
  author: string;
  category: string;
  sum: number;
  comment?: string;
  datetime: string; 
};

type FormState = {
  author: string;
  category: string;
  sum: string;
  comment?: string;
};

function App() {
  const [costs, setCosts] = useState<Cost[]>([]);
  const [form, setForm] = useState<FormState>({ author: "", category: "", sum: "", comment: ""});

  useEffect(() => {
    fetch("http://localhost:3000/costs")
      .then((res) => res.json())
      .then((data: Cost[]) => setCosts(data))
      .catch((err) => console.error(err));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("http://localhost:3000/costs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, sum: parseFloat(form.sum) }),
    });
    setForm({ author: "", category: "", sum: "", comment: ""});
    window.location.reload();
  };

  return (
    <div>
      <h1>Список расходов</h1>
      <ul>
        {costs.map((cost) => (
          <li key={cost.id}>
            {cost.author} - {cost.category} - {cost.sum} руб. - {cost.comment || "Без комментария"} - {new Date(cost.datetime).toLocaleString()}
          </li>
        ))}
      </ul>

      <h2>Добавить расход</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Автор" value={form.author} onChange={(e) => setForm({ ...form, author: e.target.value })} required />
        <input placeholder="Категория" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} required />
        <input type="number" placeholder="Сумма" value={form.sum} onChange={(e) => setForm({ ...form, sum: e.target.value })} required />
        <input placeholder="Комментарий" value={form.comment} onChange={(e) => setForm({ ...form, comment: e.target.value })} />
        <button type="submit">Добавить</button>
      </form>
    </div>
  );
}

export default App;
