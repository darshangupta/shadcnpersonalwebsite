/* eslint-disable react/no-unescaped-entities */
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
              Hi, I&apos;m <span className="text-purple-800">Darshan</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              swe @ anduril space
              <br />
              <br />
              interned at CrowdStrike (2x)
              <br />
              <br />
              Previously built ShipOdyssey&apos;s MVP, Sentinel Fertigation&apos;s sales framework, and tinder for stocks at Singh Capital Partners<br />
              <br />
              CS @ UIUC, graduated Dec 2025<br />
              Hit me up: dgupta2 [at] anduril [dot] com
            </p>
           
           
          </div>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button variant="outline" asChild>
              <a href="https://www.linkedin.com/in/darshangupta/" target="_blank" rel="noopener noreferrer">linkedIn</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://github.com/darshangupta" target="_blank" rel="noopener noreferrer">github</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://photos.app.goo.gl/9EzYnAhMbBxN9cH49" target="_blank" rel="noopener noreferrer">extras</a>
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
