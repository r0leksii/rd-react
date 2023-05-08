export const Experience = (props) => {
  const { title, description, date, company, link } = props

  return (
    <div>
      <p>
        <span className="bold">Job title: </span>
        {title}
        <br />
        <span className="bold">Dates of employment: </span>
        {date}
        <br />
        <span className="bold">Description: </span>
        {description}
        <br />
        <span className="bold">Name of employer: </span>
        {company}{' '}
        <a href={link} alt="" target="_blank" rel="noreferrer noopener">
          {link}
        </a>
      </p>
    </div>
  )
}
