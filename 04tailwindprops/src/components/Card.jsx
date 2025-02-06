function Card({
  quote = "add your quote",
  username = "your name",
  post = "not assigned",
  image = "optional",
}) {
  return (
    <div className="py-2">
      <div className="flex items-center gap-6 p-3 md:flex-row md:gap-8 rounded-2xl border-2 border-white">
        <div>
          <img className="h-40 w-35 shadow-xl rounded-md" alt="" src={image} />
        </div>
        <div className="p-2">
          <div className="flex align-start text-xl font-medium">{quote}</div>
          <div className="flex align-start text-blue-500 text-md py-0.5 font-medium">
            {username}
          </div>
          <div className="flex align-start text-sm font-normal text-slate-500">
            {post}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
