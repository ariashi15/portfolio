export default function Tags(props) {
    return (
        <div className="flex gap-[10px] mt-auto">
            {props.tags.map((tag) => (
              <div className="flex bg-dark-purple text-[16px] rounded-[5px] px-[10px] h-[21px] items-center justify-center text-light-purple transform transition-all duration-500 hover:scale-110 hover:bg-dark-dark-purple">{tag}</div>
            ))}
        </div>
    );
}