const stats = [
  { id: 1, name: "Altura Minima", value: "10 m." },
  { id: 2, name: "Altura Actual", value: "15 m." },
  { id: 3, name: "Altura Maxima", value: "20 m." },
];

export const Stats = () => {
  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3 shadow-md p-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="mx-auto flex max-w-xs flex-col gap-y-4 "
            >
              <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl p-5">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};
