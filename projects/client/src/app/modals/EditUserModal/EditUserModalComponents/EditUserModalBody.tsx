import * as React from 'react';
import EditUserModalInput from './EditUserModalInput';
import { APIUserModel } from '../../../../api/api-types';
import EditUserModalMap from './EditUserModalMap/EditUserModalMap';
import './edit-user-modal-body.css';

interface EditUserModalBodyProps {
    user: APIUserModel;
}


const EditUserModalBody: React.FunctionComponent<EditUserModalBodyProps> = (props: EditUserModalBodyProps) => {
    const { user } = props;
    return (
        <div className="modal-body-container">
            <EditUserModalMap/>
            <div className="modal-input-container">
                <div>
                    <label htmlFor="name" className="default-input-label">Name</label>
                    <EditUserModalInput which='name' id={user?.id || ""} value={user?.name || ""}/>
                </div>
                <div>
                    <label htmlFor="location" className="default-input-label">Location</label>
                    <EditUserModalInput which='location' id={user?.id || ""} value={user?.address || ""}/>
                </div>
                <div>
                    <label htmlFor="description" className="default-input-label">Description</label>
                    <EditUserModalInput which='description' id={user?.id || ""} value={user?.description || ""}/>
                </div>
            </div>
        </div>
    );
}

export default EditUserModalBody;