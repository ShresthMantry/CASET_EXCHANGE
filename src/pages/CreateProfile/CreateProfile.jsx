import React from 'react';
import { useForm } from 'react-hook-form';
import './Createprofile.css';

const CreateProfile = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const watchOrderDataUploadType = watch('orderDataUploadType');

  const onSubmit = data => {
    console.log(data);
    // Handle the form submission (e.g., send data to an API)
  };

  return (
    <div className="container">
      {/* <h2 className="title">Create Business Profile</h2> */}
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        {/* Brand Details */}
        <div className="section">
          <h3>Brand Details</h3>
          <div className="form-group">
            <label>Brand Name</label>
            <input type="text" {...register('brandName', { required: 'Brand Name is required' })} />
            {errors.brandName && <span className="error-message">{errors.brandName.message}</span>}
          </div>

          <div className="form-group">
            <label>Registered Email</label>
            <input
              type="email"
              {...register('registeredEmail', {
                required: 'Registered Email is required',
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: 'Invalid email format'
                }
              })}
            />
            {errors.registeredEmail && <span className="error-message">{errors.registeredEmail.message}</span>}
          </div>

          <div className="form-group">
            <label>About the Brand</label>
            <textarea rows="4" {...register('aboutBrand', { required: 'About the Brand is required' })} />
            {errors.aboutBrand && <span className="error-message">{errors.aboutBrand.message}</span>}
          </div>

          <div className="form-group">
            <label>Registered Name</label>
            <input type="text" {...register('registeredName', { required: 'Registered Name is required' })} />
            {errors.registeredName && <span className="error-message">{errors.registeredName.message}</span>}
          </div>

          <div className="form-group">
            <label>Logo</label>
            <input type="file" {...register('logo', { required: 'Logo is required' })} />
            {errors.logo && <span className="error-message">{errors.logo.message}</span>}
          </div>

          <div className="form-group">
            <label>Company Documents (upto 3)</label>
            <input type="file" multiple {...register('companyDocs', { required: 'Please upload up to 3 documents' })} />
            {errors.companyDocs && <span className="error-message">{errors.companyDocs.message}</span>}
          </div>

          <div className="form-group">
            <label>Agreements (upto 2)</label>
            <input type="file" multiple {...register('agreements', { required: 'Please upload up to 2 agreements' })} />
            {errors.agreements && <span className="error-message">{errors.agreements.message}</span>}
          </div>
        </div>

        {/* Account Details */}
        <div className="section">
          <h3>Account Details</h3>
          <div className="form-group">
            <label>Bank Account Number</label>
            <input type="text" {...register('bankAccountNumber', { required: 'Bank Account Number is required' })} />
            {errors.bankAccountNumber && <span className="error-message">{errors.bankAccountNumber.message}</span>}
          </div>

          <div className="form-group">
            <label>IFSC Code</label>
            <input type="text" {...register('ifscCode', { required: 'IFSC Code is required' })} />
            {errors.ifscCode && <span className="error-message">{errors.ifscCode.message}</span>}
          </div>

          <div className="form-group">
            <label>Branch Name</label>
            <input type="text" {...register('branchName', { required: 'Branch Name is required' })} />
            {errors.branchName && <span className="error-message">{errors.branchName.message}</span>}
          </div>

          <div className="form-group">
            <label>Cancelled Cheque</label>
            <input type="file" {...register('cancelledCheque', { required: 'Cancelled Cheque is required' })} />
            {errors.cancelledCheque && <span className="error-message">{errors.cancelledCheque.message}</span>}
          </div>
        </div>

        {/* Billing System Details */}
        <div className="section">
          <h3>Billing System Details</h3>
          <div className="form-group">
            <label>Choose tenure of Order Upload</label>
            <select {...register('orderUploadTenure', { required: 'Please select a tenure' })}>
              <option value="">Select Tenure</option>
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
            </select>
            {errors.orderUploadTenure && <span className="error-message">{errors.orderUploadTenure.message}</span>}
          </div>

          <div className="form-group">
            <label>Choose type of Order Data Upload</label>
            <select {...register('orderDataUploadType', { required: 'Please select a type' })}>
              <option value="">Select Type</option>
              <option value="manual">Manual (Available for the first 60 days only)</option>
              <option value="automated">Automated</option>
            </select>
            {errors.orderDataUploadType && <span className="error-message">{errors.orderDataUploadType.message}</span>}
          </div>

          {watchOrderDataUploadType === 'automated' && (
            <>
              <div className="form-group">
                <label>POS Name</label>
                <input type="text" {...register('posName', { required: 'POS Name is required' })} />
                {errors.posName && <span className="error-message">{errors.posName.message}</span>}
              </div>

              <div className="form-group">
                <label>Integration Status</label>
                <select {...register('integrationStatus', { required: 'Please select an integration status' })}>
                  <option value="">Select Status</option>
                  <option value="pending">Pending</option>
                  <option value="supporting">Supporting</option>
                  <option value="integrated">Integrated</option>
                </select>
                {errors.integrationStatus && <span className="error-message">{errors.integrationStatus.message}</span>}
              </div>
            </>
          )}
        </div>

        <button type="submit" className="submit-button">Create Profile</button>
      </form>
    </div>
  );
};

export default CreateProfile;
