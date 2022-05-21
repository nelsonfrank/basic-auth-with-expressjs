
const Table = () => {
    return (
        <div className="nxt-relative nxt-overflow-x-auto nxt-shadow-md sm:nxt-rounded-lg">
            <table className="nxt-w-full nxt-text-sm nxt-text-left nxt-text-gray-500 dark:nxt-text-gray-400">
                <thead className="nxt-text-xs nxt-text-gray-700 nxt-uppercase nxt-bg-gray-50 dark:nxt-bg-gray-700 dark:nxt-text-gray-400">
                    <tr>
                        <th scope="col" className="nxt-px-6 nxt-py-3">
                            Fullname
                        </th>
                        <th scope="col" className="nxt-px-6 nxt-py-3">
                            Gender
                        </th>
                        <th scope="col" className="nxt-px-6 nxt-py-3">
                            Nationality
                        </th>
                        <th scope="col" className="nxt-px-6 nxt-py-3">
                            Roles
                        </th>
                        <th scope="col" className="nxt-px-6 nxt-py-3">
                            <span className="nxt-sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="nxt-bg-white nxt-border-b dark:nxt-bg-gray-800 dark:nxt-border-gray-700">
                        <th scope="row" className="nxt-px-6 nxt-py-4 nxt-font-medium nxt-text-gray-900 dark:nxt-text-white nxt-whitespace-nowrap">
                            Apple MacBook Pro 17"
                        </th>
                        <td className="nxt-px-6 nxt-py-4">
                            Sliver
                        </td>
                        <td className="nxt-px-6 nxt-py-4">
                            Laptop
                        </td>
                        <td className="nxt-px-6 nxt-py-4">
                            $2999
                        </td>
                        <td className="nxt-px-6 nxt-py-4 nxt-text-right">
                            <a href="#" className="nxt-font-medium nxt-text-blue-600 dark:nxt-text-blue-500 hover:nxt-underline">Edit</a>
                        </td>
                    </tr>
                    <tr className="nxt-bg-white nxt-border-b dark:nxt-bg-gray-800 dark:nxt-border-gray-700">
                        <th scope="row" className="nxt-px-6 nxt-py-4 nxt-font-medium nxt-text-gray-900 dark:nxt-text-white nxt-whitespace-nowrap">
                            Microsoft Surface Pro
                        </th>
                        <td className="nxt-px-6 nxt-py-4">
                            White
                        </td>
                        <td className="nxt-px-6 nxt-py-4">
                            Laptop PC
                        </td>
                        <td className="nxt-px-6 nxt-py-4">
                            $1999
                        </td>
                        <td className="nxt-px-6 nxt-py-4 nxt-text-right">
                            <a href="#" className="nxt-font-medium nxt-text-blue-600 dark:nxt-text-blue-500 hover:nxt-underline">Edit</a>
                        </td>
                    </tr>
                    <tr className="nxt-bg-white dark:nxt-bg-gray-800">
                        <th scope="row" className="nxt-px-6 nxt-py-4 nxt-font-medium nxt-text-gray-900 dark:nxt-text-white nxt-whitespace-nowrap">
                            Magic Mouse 2
                        </th>
                        <td className="nxt-px-6 nxt-py-4">
                            Black
                        </td>
                        <td className="nxt-px-6 nxt-py-4">
                            Accessories
                        </td>
                        <td className="nxt-px-6 nxt-py-4">
                            $99
                        </td>
                        <td className="nxt-px-6 nxt-py-4 nxt-text-right">
                            <a href="#" className="nxt-font-medium nxt-text-blue-600 dark:nxt-text-blue-500 hover:nxt-underline">Edit</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table