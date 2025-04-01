const UserDetailsModal = ({ isOpen, onClose, user }) => {
    if (!isOpen || !user) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">User Details</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Name</h3>
                <p className="text-lg">{user.name}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500">Email</h3>
                <p className="text-lg">{user.email}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500">Password</h3>
                <p className="text-lg">{user.password}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500">Role</h3>
                <p className="text-lg">{user.role}</p>
              </div>
            </div>
            
            <div className="mt-6 flex justify-end">
              <button
                onClick={onClose}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default UserDetailsModal;