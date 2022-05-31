## My-books with TypeScript

### todo list

- [install] react-router-dom
- [install] @types/react-router-dom
- router page 만들기
- [install] react-error-boundary
- [install] npm i redux react-redux redux-saga redux-devtools-extension redux-actions
- [install] npm i @types/react-redux @types/redux-actions -D
- redux setting

### study note

### notice

- react-router-dom이 버전 6으로 업그레이드 되면서 Switch를 지원하지 않음.
  Switch -> routes로 바뀌고, component -> element로 바뀜.

```ts
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="users/*" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}

function Users() {
  return (
    <div>
      <nav>
        <Link to="me">My Profile</Link>
      </nav>

      <Routes>
        <Route path=":id" element={<UserProfile />} />
        <Route path="me" element={<OwnUserProfile />} />
      </Routes>
    </div>
  );
}
```
