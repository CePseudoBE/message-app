import { Head, useForm } from '@inertiajs/react'

export default function Home(props: { version: number }) {
  const { data, setData, post, processing, errors } = useForm({
    fullName: '',
    email: '',
    password: '',
  })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    post('/register')
  }

  return (
    <>
      <Head title="Homepage" />

      <div className="container">
        <div className="title">AdonisJS {props.version} x Inertia x React</div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              value={data.fullName}
              onChange={(e) => setData('fullName', e.target.value)}
              className="form-control"
            />
            {errors.fullName && <span>{errors.fullName}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={data.email}
              onChange={(e) => setData('email', e.target.value)}
              className="form-control"
            />
            {errors.email && <span>{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={data.password}
              onChange={(e) => setData('password', e.target.value)}
              className="form-control"
            />
            {errors.password && <span>{errors.password}</span>}
          </div>

          <button type="submit" className="btn btn-primary" disabled={processing}>
            Register
          </button>
        </form>
      </div>
    </>
  )
}
