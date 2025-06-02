import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import clsx from "clsx"

export default function Home() {
  return (
    <main className="min-h-screen p-8 md:p-24 max-w-3xl mx-auto">
      <Card className={clsx(
        "bg-muted/60 border border-border shadow-lg",
        "relative overflow-hidden"
      )}>
        {/* Accent bar */}
        <div className="absolute top-0 left-0 w-full h-2 bg-purple-800" />
        <CardContent className="space-y-6 relative z-10">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">
              Hi, I'm <span className="text-purple-800">Darshan</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Currently at CrowdStrike (<a href="https://www.crowdstrike.com/products/ng-siem/" className="text-blue-600 hover:underline">NG-SIEM</a>), used to work on sensor performance. Previously built <a href="https://shipodyssey.com" className="text-blue-600 hover:underline">ShipOdyssey</a>'s MVP, <a href="https://www.sentinelfertigation.com" className="text-blue-600 hover:underline">Sentinel Fertigation</a>'s sales framework, and tinder for stocks at <a href="https://www.linkedin.com/company/singh-capital/" className="text-blue-600 hover:underline">Singh Capital Partners</a>.<br />
              <br />
              CS @ UIUC, graduating Dec 2025.<br />
              Reach out: darshangupta [at] gmail [dot] com
            </p>
           
          </div>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button variant="outline" asChild>
              <a href="https://www.linkedin.com/in/darshangupta/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://github.com/darshangupta" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </Button>
          </div>
          <div className="flex justify-center pt-6">
            <img src="/realdog.png" alt="Dog coding meme" className="rounded-lg max-w-xs shadow-md" />
          </div>
        </CardContent>
      </Card>
    </main>
  )
}
