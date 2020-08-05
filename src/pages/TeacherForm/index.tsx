//formulário de inscrição dos professores
import React from 'react';

import PageHeader from '../../components/Pageheader';

function TeacherForm() {
    return (
        <div id="page-teacher-form" className="container">
            <PageHeader title="Que incrível que você quer dar aulas." />  {/* "Invocando" o cabeçalho do arquivo dentro de components */}
        </div>
    )
}

export default TeacherForm;