import React from 'react'
//import { ProgressBar } from 'react-bootstrap'

const ListProduct = () => {

    return (
    <div>
        <div className="page-header">
          <h3 className="page-title"> Daftar buku </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/addproduct" onClick={event => event.preventDefault()}> + Tambah Buku </a></li>
            </ol>
          </nav>
        </div>
        <div className="row">
          
          <div className="col-lg-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Hoverable Table</h4>
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>User</th>
                        <th>Product</th>
                        <th>Sale</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Jacob</td>
                        <td>Photoshop</td>
                        <td className="text-danger"> 28.76% <i className="mdi mdi-arrow-down"></i></td>
                        <td><label className="badge badge-danger">Pending</label></td>
                      </tr>
                      <tr>
                        <td>Messsy</td>
                        <td>Flash</td>
                        <td className="text-danger"> 21.06% <i className="mdi mdi-arrow-down"></i></td>
                        <td><label className="badge badge-warning">In progress</label></td>
                      </tr>
                      <tr>
                        <td>John</td>
                        <td>Premier</td>
                        <td className="text-danger"> 35.00% <i className="mdi mdi-arrow-down"></i></td>
                        <td><label className="badge badge-info">Fixed</label></td>
                      </tr>
                      <tr>
                        <td>Peter</td>
                        <td>After effects</td>
                        <td className="text-success"> 82.00% <i className="mdi mdi-arrow-up"></i></td>
                        <td><label className="badge badge-success">Completed</label></td>
                      </tr>
                      <tr>
                        <td>Dave</td>
                        <td>53275535</td>
                        <td className="text-success"> 98.05% <i className="mdi mdi-arrow-up"></i></td>
                        <td><label className="badge badge-warning">In progress</label></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default ListProduct