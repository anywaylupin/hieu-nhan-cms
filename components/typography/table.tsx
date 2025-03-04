type TypographyTableProps = {
  headers: string[];
  data: { id: string; values: string[] }[];
};

export const TypographyTable = ({ headers, data }: TypographyTableProps) => {
  return (
    <div className="my-6 w-full overflow-y-auto">
      <table className="w-full">
        <thead>
          <tr className="even:bg-muted m-0 border-t p-0">
            {headers.map((header) => (
              <th
                key={header}
                className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map(({ id, values }) => (
            <tr key={id} className="even:bg-muted m-0 border-t p-0">
              {values.map((cell, cellIndex) => (
                <td
                  key={`${id}-${cellIndex}`}
                  className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
