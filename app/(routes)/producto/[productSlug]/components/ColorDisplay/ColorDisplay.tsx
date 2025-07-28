const colorMap: Record<string, string> = {
  rojo: "#FF0000",
  blanco: "#FFFFFF",
  negro: "#000000",
  verde: "#00FF00",
  azul: "#0000FF",
  amarillo: "#FFFF00",
  gris: "#808080",
  naranja: "#FFA500",
  rosa: "#FFC0CB",
  morado: "#800080",
  marron: "#A52A2A",
  // Agrega más colores según necesites
};

export function ColorDisplay({ colors }: { colors: string }) {
  // Separar los colores por comas y limpiar espacios
  const colorList = colors
    .split(",")
    .map((color) => color.trim().toLowerCase());

  return (
    <div className="flex gap-2 ml-2">
      {colorList.map((color, index) => {
        const hexColor = colorMap[color] || "#CCCCCC"; // Gris por defecto si no se encuentra
        return (
          <div
            key={index}
            className="w-6 h-6 rounded-full border border-gray-300"
            style={{ backgroundColor: hexColor }}
            title={color}
          />
        );
      })}
    </div>
  );
}
