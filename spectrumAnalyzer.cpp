#include "spectrumAnalyzer.h"

spectrumAnalyzer::spectrumAnalyzer()
{
}

spectrumAnalyzer::~spectrumAnalyzer()
{
}

void spectrumAnalyzer::paint (juce::Graphics& g)
{
    g.fillAll (juce::Colours::black);
    g.setColour (juce::Colours::green);
    g.drawText ("Spectrum Analyzer", getLocalBounds(), juce::Justification::centred);
}

void spectrumAnalyzer::resized()
{
}
