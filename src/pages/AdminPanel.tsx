import { AuthProvider } from '../admin/context/AuthContext';
import AuthPage from "../admin/pages/AuthPage";


const AdminPanel = () => {
    return (
        <AuthProvider>
            <AuthPage />
        </AuthProvider>
    )
}

export default AdminPanel