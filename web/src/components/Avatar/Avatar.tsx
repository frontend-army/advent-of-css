import Icon from '../Icon/Icon'

const indicators = {
  success: (
    <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-white bg-green-500">
      <Icon id="check" size={12} />
    </div>
  ),
  warning: (
    <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-white bg-yellow-500 fill-black">
      <Icon id="question" size={12} />
    </div>
  ),
  error: (
    <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-white bg-red-500">
      <Icon id="minus" size={12} />
    </div>
  ),
}

const Avatar = ({
  name,
  image,
  indicatorType,
  icon,
  showSantaHat,
}: {
  name?: string
  image?: string
  indicatorType?: 'success' | 'warning' | 'error'
  icon?: string
  showSantaHat?: boolean
}) => {
  const indicator = indicators[indicatorType]
  return (
    <div className="relative h-12 w-12 rounded-full border-4 border-white bg-green-700 text-white">
      {image ? (
        <img className="h-full w-full rounded-full" src={image} alt={name} />
      ) : icon ? (
        <div className="flex h-full w-full items-center justify-center rounded-full ">
          <Icon id={icon} size={48} />
        </div>
      ) : name ? (
        <span className="flex h-full w-full items-center justify-center rounded-full font-semibold">
          {name[0]}
        </span>
      ): null}
      {indicator}
      {showSantaHat && (
        <img
          className="absolute -right-1 -top-3"
          src="/santa-hat.png"
          alt="Santa hat"
          width="25"
          height="25"
        />
      )}
    </div>
  )
}

export default Avatar
