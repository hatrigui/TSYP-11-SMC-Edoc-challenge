<div
  key={index}
  className={`flex ${
    message.type === "user" ? "justify-end" : "justify-start"
  }`}
>
  <div
    className={`${
      message.type === "user" ? "bg-purple-500" : "bg-gray-800"
    } rounded-lg p-4 text-white max-w-sm`}
  >
    {message.message}
  </div>
</div>;
