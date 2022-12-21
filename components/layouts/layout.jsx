import Meta from '../shared/meta'

export default function Layout(props) {
  return (
    <>
      <Meta />
        {props.children}
    </>
  )
}