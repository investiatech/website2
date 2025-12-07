import Link from "next/link";

export default function Privacy() {
    return (
        <section id="privacy" className="container max-w-5xl items-center gap-6 pb-8 pt-6 my-12 md:py-10 font-sans">
            <h1 className="text-5xl font-extrabold leading-tight tracking-tighter md:text-6xl mb-4 text-center">
                Privacy Policy for Quizapp
            </h1>
            <p className="text-lg text-muted-foreground mb-8 text-center">
                Privacy Policy
            </p>

            <div className="my-24">
                <div className="text-sm text-muted-foreground my-6">
                    Effective Date: Nov 26 2024,<p />
                    Last Updated: Nov 26 2024
                </div>
                <div className="my-6">
                    <h2 className="text-2xl my-2">Quizapp - Offline Quiz Application for English Learning</h2>
                    <span className="text-muted-foreground"> Quizapp an offline quiz application for English learning is a mobile app designed to help users improve their English language skills offline without requiring an internet connection.
                        <p />This page is intended to inform you about my policies regarding the collection, use, and disclosure of Personal Information for anyone who chooses to use this app.</span>
                </div>
                <div className="my-6">
                    <h2 className="text-2xl my-2">Collecting and Using Your Personal Data</h2>
                    <span className="text-muted-foreground">We prioritize the privacy and security of your personal information. This app does not collect or share any personal data from users.
                        The app integrates third-party services and SDKs that are specifically approved for use in child-focused applications.
                        Below are links to the privacy policies of the third-party service providers utilized by this app.</span>
                    <ul className="mt-4">
                        <li><Link href="https://policies.google.com/privacy" className="text-sm text-blue-600 hover:cursor-pointer">Google Play Services</Link></li>
                        <li><Link href="https://developers.google.com/ml-kit/terms" className="text-sm text-blue-600 hover:cursor-pointer">Google ML Kit</Link></li>
                    </ul>
                </div>
                <div className="my-6">
                    <h2 className="text-2xl my-2">Security</h2>
                    <span className="text-muted-foreground">We appreciate your trust in granting the necessary permissions required for the app to function.<p />We do not collect, store, or share pictures from your device with anyone, except for the Google ML Kit Vision API. This API is utilized solely to identify the language in images and translate them. For more information on how these APIs handle your data, please refer to their respective privacy policies on their official websites.</span>
                </div>
                <div className="my-6">
                    <h2 className="text-2xl my-2">Children&apos;s Privacy</h2>
                    <span className="text-muted-foreground">Our application is not intended for use by individuals under the age of 13. We do not gather any personal information from children through our platform.</span>
                </div>
                <div className="text-sm text-muted-foreground mt-24">Our Privacy Policy may be revised periodically. Any updates will be communicated by publishing the updated Privacy Policy on this page.</div>
            </div>
        </section>
    )
}