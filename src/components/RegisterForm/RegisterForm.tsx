export const RegisterForm = () => {
  return (
    <div className="container-fluid">
      <div className="login_content">
        <form action="" method="post">
          <div className="mb-3">
            <label htmlFor="exampleInputtext" className="form-label">
              Your Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampletext"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Repeat Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="buttons_form">
            <button type="submit" className="btn btn-personality">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
