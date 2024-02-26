interface Props {
  icon: string;
}

const MaterialIcon = ({ icon }: Props) => (
  <span className='material-symbols-outlined'>
    {icon}
  </span>
)

export default MaterialIcon