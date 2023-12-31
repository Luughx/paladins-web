export default function CasualCard({ wins, losses, winrate, rank, leaves }) {
    return (
        <div className="col-span-12 sm:col-span-4 md:me-4">
            <div className="p-4 relative bg-gray-900 border border-gray-800 shadow-lg rounded-2xl">
                <div className="text-2xl text-gray-100 font-medium leading-8">
                    Casual
                </div>
                <div className="text-base text-gray-100 font-medium leading-8">
                    Win rate: {winrate}% ({wins}-{losses})
                </div>
                <div className="text-sm text-gray-500">
                    {leaves} times deserted
                </div>
            </div>
        </div>
    );
}
