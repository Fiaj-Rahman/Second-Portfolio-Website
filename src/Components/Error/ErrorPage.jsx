import React from "react";

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-6xl font-bold text-red-600">404</h1>
            <p className="mt-4 text-lg text-gray-700">Page Not Found</p>
            <p className="mt-2 text-sm text-gray-500">Sorry, the page you are looking for does not exist.</p>
        </div>
    );
}

export default ErrorPage;