import React from "react";
import DashboardLayout from "@/ui/dashboard-layout";
const Notes = () => {
    return (
        <DashboardLayout>
            <>
                <div>
                    <h2 className="nxt-text-3xl nxt-font-semibold">Notes</h2>
                </div>
                <div>
                    <h2 className="nxt-text-lg nxt-font-medium">Recent</h2>
                    <div>
                        <div>
                            <div className="nxt-flex nxt-flex-wrap nxt-gap-4 ">
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                            </div>
                        </div>
                    </div>
                </div>
            </>

        </DashboardLayout>
    );
};
const Card = () => (
    <div className="nxt-flex nxt-flex-col nxt-flex-1 nxt-p-6 nxt-max-w-sm nxt-bg-white nxt-rounded-lg nxt-border nxt-border-gray-200 nxt-shadow-md hover:nxt-bg-gray-100 dark:nxt-bg-gray-800 dark:nxt-border-gray-700 dark:hover:nxt-bg-gray-700">
        <h5 className="nxt-mb-2 nxt-text-2xl nxt-font-bold nxt-tracking-tight nxt-text-gray-900 dark:nxt-text-white">Noteworthy technology acquisitions 2021</h5>
        <p className="nxt-font-normal nxt-text-gray-700 dark:nxt-text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    </div>
)
export default Notes;
