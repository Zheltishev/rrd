import { Navigate, useLocation } from "react-router-dom"

export default function RequireAuth(children: any) {
    const location = useLocation()
    const auth = false

    if (!auth) {
        return <Navigate to='/login' state={{from: location}} />
    }

    return children
}