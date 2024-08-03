import Searcher from "@/app/molecules/searchers/searcher";
import Header from "@/app/organisms/header/header";

export default function UserPage() {
    return (
        <>
            <Header title="Usuarios" buttonLabel="Nuevo Usuario" icon="pi pi-plus"/>
            <Searcher />
        </>
    )
}
