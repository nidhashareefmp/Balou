export default function FeatureIcons() {
    const features = [
        { icon: "🚚", text: "Fast Delivery" },
        { icon: "⭐", text: "Premium Quality" },
        { icon: "💳", text: "Secure Payment" },
    ];


    return (
        <div className="w-full flex justify-center gap-10 py-10 bg-purple-50">
            {features.map((f, i) => (
                <div key={i} className="text-center text-xl">
                    <div className="text-4xl mb-2">{f.icon}</div>
                    <p>{f.text}</p>
                </div>
            ))}
        </div>
    );
}