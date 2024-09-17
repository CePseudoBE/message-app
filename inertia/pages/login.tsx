import { Head, useForm } from '@inertiajs/react'

export default function Login() {
  const { data, setData, post, processing, errors } = useForm({
    email: '',
    password: '',
  })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    post('/login')
  }

  return (
    <>
      <Head title="Homepage" />

      <div className="container">
        <form onSubmit={handleSubmit}>
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
            Login
          </button>
        </form>
      </div>
    </>
  )
}
