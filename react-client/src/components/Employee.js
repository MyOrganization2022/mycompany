import React, { Component } from "react";
import { Table, Button, ButtonToolbar } from 'react-bootstrap';
import { AddEmpModal } from "./AddEmpModal";
import { EditEmpModal } from "./EditEmpModal";


export class Employee extends Component {

    constructor(props) {
        super(props);
        this.state = {
            emps: [],
            addModalShow: false,
            editModalShow: false
        };
    }

    refreshList() {
        fetch(process.env.REACT_APP_API + 'employee/')
        .then(response => response.json())
        .then(data => {
            this.setState({
                emps: data
            });
        });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    deleteEmp(empId) {
        if (window.confirm('Are you sure?')) {
            fetch(process.env.REACT_APP_API + 'employee/' + empId, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        }
    }

    render() {
        const { emps, empId, empName, dep, photoFileName, dateOfJoining} = this.state;
        const addModalClose = () => this.setState({ addModalShow: false });
        const editModalClose = () => this.setState({ editModalShow: false });

        return (
            <div>
                
                <Table className="mt-3" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>EmployeeId</th>
                            <th>EmployeeName</th>
                            <th>Department</th>
                            <th>dateOfJoining</th>
                            <th>Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            emps.map(emp => (
                                <tr key={emp.EmployeesId}>
                                    <td>{emp.EmployeesId}</td>
                                    <td>{emp.EmployeesName}</td>
                                    <td>{emp.Department}</td>
                                    <td>{emp.DataOfJoining}</td>
                                    <td>
                                        <ButtonToolbar>
                                            <Button 
                                            className="mr-2" 
                                            variant="success" 
                                            style={{'width': '100px'}} 
                                            onClick={() => this.setState({
                                                editModalShow: true,
                                                empId: emp.EmployeesId,
                                                empName: emp.EmployeesName,
                                                dep: emp.Department,
                                                photoFileName: emp.photoFileName,
                                                DataOfJoinin: emp.DataOfJoinin
                                            })}>
                                                Edit
                                            </Button>
                                            &nbsp;
                                            <Button 
                                            className="mr-2" 
                                            variant="danger" 
                                            style={{'width': '100px'}}
                                            onClick={() => this.deleteEmp}
                                            >
                                                Delete
                                            </Button>
                                            <EditEmpModal
                                                show={this.state.editModalShow}
                                                onHide={editModalClose}
                                                empId={empId}
                                                empName={empName}
                                                dep={dep}
                                                photoFileName={photoFileName}
                                                dateOfJoinin={dateOfJoining}
                                            />
                                        </ButtonToolbar>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
                <br/>
                <br/>
                &nbsp;
                <ButtonToolbar className="mt-0">
                    <Button
                        variant="primary"
                        onClick={() => this.setState({ addModalShow: true})}
                    >
                        Add Employee
                    </Button>
                    <AddEmpModal
                        show={this.state.addModalShow}
                        onHide={addModalClose}
                    />
                </ButtonToolbar>
                
            </div>
        );
    }
}